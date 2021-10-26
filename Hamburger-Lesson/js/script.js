/*
$('.menu-trigger').on('click', function(event) {
  // .menu-triggerクリック時に行われる処理
});
 */

/*
.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッドです。
トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。

さらに、.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、
activeクラスになったときにアイコンが「×」になるように設定されています。
 */

/*
.fadeToggle()　でフェードイン・フェードアウトを切り替える
このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。

ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定しています。
#sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されています。

このように設定することで、ハンバーガーメニューがクリックされたときに、
フェードインとフェードアウトが交互に実行されるようになります。
 */

$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  })
})