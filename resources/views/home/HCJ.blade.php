@extends('layout/index_nav')

@section('head')
    <title>HCJ</title>
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/HCJ.css">
    <script type="text/javascript">
        $(function(){
            $('#index_HCJ').addClass('index_nav_active');
        })
    </script>
@stop

@section('body_index_nav')
    <div class="col-xs-10 pull-right index_body">
        <h3 class="text-center">Html+CSS+JS</h3>
        <div class="panel panel-info">
            <div class="panel-heading">Game</div>
            <div class="panel-body">
                <a class="btn btn-info" href="/HCJ/game/2048">2048</a>
            </div>
        </div>
        <div class="panel panel-danger">
            <div class="panel-heading">Tool</div>
            <div class="panel-body">
                <a class="btn btn-danger" href="/HCJ/tool/clock">Clock</a>
            </div>
        </div>
    </div>
@stop