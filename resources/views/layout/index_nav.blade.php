@extends('layout/reference')

@section('body')
<div class="col-xs-2 index_nav">
   <div class="index_nav_head">
      <div class="text-center"><img id="index_nav_head_pic" src="/img/image/cav.gif"></div>
   </div>
   <hr>
   <ul class="nav nav-pills nav-stacked">
      <li id="index_home"><a href="/index"><span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;&nbsp;&nbsp;Home</a></li>
      <li><a href=""><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;&nbsp;Profile</a></li>
      <hr>
      <li id="index_HCJ"><a href="/HCJ"><span class="glyphicon glyphicon-fire"></span>&nbsp;&nbsp;&nbsp;&nbsp;HCJ</a></li>
   </ul>
</div>
   @yield('body_index_nav')
@stop
