@extends('layouts/blankLayout')

@section('title', config('app.name')." - Under Maintenance")

@section('content')

<style type="text/css">
    html, body {
        height: 100vh;
        width: 100vw;
        margin: 0;
    }

    .container {
        min-height: 100%;
        min-width: 100vw;
    }
</style>

    <style>

        @keyframes slide{
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-1692px, 0, 0);
        }
        }

        .container {
            overflow: hidden;
            padding: 0;
            margin: 0;

        }

        .sliding-background {
            background: url("{{ asset('assets/img/under_maintenance.jpg') }}") repeat-x;
            height: 100vh;
            width: 600vw;
            background-size: contain;
            animation: slide 60s linear infinite;
        }

        @keyframes slide{
            0% {
                transform: translate3d(0, 0, 0);
            }
            100% {
                transform: translate3d(-1692px, 0, 0);
            }
        }
    </style>
    <div class="container">
        <div class="sliding-background"></div>
      </div>
@endsection
