<?php

namespace Tests\Feature;

use App\Mail\ContactFormEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }

    public static function pages(): array
    {
        return [['/'], ['/about'], ['/work'], ['/contact']];
    }

    #[DataProvider('pages')]
    public function test_page_renders_and_logs_a_visit(string $uri): void
    {
        $this->get($uri)
            ->assertOk()
            ->assertSee('Muhammad Hafiz Ruslan', false);

        $this->assertDatabaseCount(config('visitor.table_name'), 1);
    }

    public function test_each_page_has_its_own_title_and_canonical(): void
    {
        $this->get('/about')
            ->assertSee('<title>About Muhammad Hafiz Ruslan | Experience, Education &amp; Skills</title>', false)
            ->assertSee('<link rel="canonical" href="'.url('/about').'">', false)
            ->assertSee('"@type":"Person"', false);

        $this->get('/')
            ->assertSee('<link rel="canonical" href="'.url('/').'">', false);
    }

    public function test_sitemap_lists_every_page(): void
    {
        $response = $this->get('/sitemap.xml')
            ->assertOk()
            ->assertHeader('Content-Type', 'application/xml');

        foreach (['/', '/about', '/work', '/contact'] as $uri) {
            $response->assertSee('<loc>'.url($uri).'</loc>', false);
        }

        $this->assertDatabaseCount(config('visitor.table_name'), 0);
    }

    public function test_contact_form_with_correct_answer_stores_and_mails(): void
    {
        Mail::fake();

        $this->postJson('/sendEmail', $this->payload(['combat_spam' => '19']))
            ->assertOk()
            ->assertJson(['status' => 'success']);

        $this->assertDatabaseHas('contact_form', ['contact_email' => 'visitor@example.com', 'contact_is_bot' => false]);
        Mail::assertSent(ContactFormEmail::class, fn ($mail) => $mail->hasTo('hafizcoolman@gmail.com'));
    }

    public function test_contact_form_with_wrong_answer_is_flagged_as_bot_and_not_mailed(): void
    {
        Mail::fake();

        $this->postJson('/sendEmail', $this->payload(['combat_spam' => '7']))
            ->assertOk()
            ->assertJson(['status' => 'success']);

        $this->assertDatabaseHas('contact_form', ['contact_email' => 'visitor@example.com', 'contact_is_bot' => true]);
        Mail::assertNothingSent();
    }

    public function test_contact_form_rejects_invalid_email(): void
    {
        Mail::fake();

        $this->postJson('/sendEmail', $this->payload(['contact_email' => 'not-an-email']))
            ->assertNotFound()
            ->assertJson(['status' => 'error', 'detail' => 'Email entered is not valid']);

        $this->assertDatabaseCount('contact_form', 0);
        Mail::assertNothingSent();
    }

    public function test_contact_email_renders(): void
    {
        $mail = new ContactFormEmail($this->payload() + ['contact_combat_spam' => '19', 'contact_is_bot' => false]);

        $mail->assertHasSubject('vFolio Hafiz: Hello');
        $mail->assertSeeInHtml('visitor@example.com');
    }

    private function payload(array $overrides = []): array
    {
        return array_merge([
            'contact_email' => 'visitor@example.com',
            'contact_name' => 'Visitor',
            'contact_subject' => 'Hello',
            'contact_message' => 'Nice portfolio',
            'combat_spam' => '19',
        ], $overrides);
    }
}
