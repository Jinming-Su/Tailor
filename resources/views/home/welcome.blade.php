o@extends('layout/reference')

@section('head')
    <title>Personal Tailor</title>
    <link rel="stylesheet" href="/css/welcome.css">
    <script src="/js/welcome.js"></script>
@stop

@section('body')
    <canvas id="canvas">
        当前浏览器不支持酷炫页面的显示，请更换！
    </canvas>

    <a class="btn btn-default welcome_btn" href="/index">GO&nbsp;&nbsp;&nbsp;»</a>

@stop
