<!DOCTYPE html>
<html>
<head>
    <title>vFolio Hafiz: {{ $details['contact_subject'] ?? "emptySubject" }}</title>
</head>
<body>
    <h1> {{ $details['contact_name'] ?? "emptyName" }} from {{ $details['contact_email'] ?? "emptyEmail" }}</h1>
    <p>{{ $details['contact_message'] ?? "emptyMessage"}}</p>
</body>
</html>
