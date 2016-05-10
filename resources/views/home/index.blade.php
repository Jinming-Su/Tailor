@extends('layout/index_nav')

@section('head')
    <title>Home</title>
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/home.css">
    <script type="text/javascript">
        $(function(){
            $('#index_home').addClass('index_nav_active');
        })
    </script>
@stop
@section('body_index_nav')
    <div class="col-xs-10 pull-right index_body">

        <h3 class="text-center">Main Page</h3>
        <div class="panel panel-primary">
            <div class="panel-heading">
                Some ad. about me
            </div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item">CSDN:&nbsp;&nbsp;<a href="http://blog.csdn.net/u014451076">http://blog.csdn.net/u014451076</a><br>
                    <p class="text_indent_2em">Many simple lessons, my learning road, and my thinkings.</p>
                    </li>
                    <li class="list-group-item">QQ:<a>526664687</a>
                    <p class="text_indent_2em">Only for communicating</p>
                    </li>
                </ul>
            </div>
            <div class="panel-footer">Welcome your visit</div>
        </div>
    </div>
@stop
