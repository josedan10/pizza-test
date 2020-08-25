<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <title>Pizza Task</title>

        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        
    </head>
    <body>
        <div id="app"></div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
