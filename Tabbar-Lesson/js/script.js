/*
hide();は、特定のHTML要素を非表示にするメソッドです。
$('#tab-contents .tab[id != "tab1"]').hide();と記述することで、
id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。
 */

/*
$('#tab-menu a').on('click', function(event) {
  // イベント発生時に行われる処理
});
 */

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

/*
$("#tab-contents .tab").hide();
id="tab-contents"内のいずれかのタブがクリックされたときに、
そのタブ内の全コンテンツをいったん非表示にしています。
 */

/*
.removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッドです。
ここでは、activeが削除対象のクラスとして指定されています。
CSSの#tab-menu .activeの設定では、タブのクラスがactiveのときは背景色が
白色／文字色が黒色になるように設定されています。
タブを切り替えるときは、このCSS設定もいったん削除しなければなりません。このため、
.removeClass()にactiveクラスを指定しています
 */

/*
.addClass()は、任意のHTML要素にクラス属性を追加できるメソッドです。
ここでは、activeが追加対象のクラスとして指定されています。
どのときにactiveクラスが追加されるかというと、$(this)のとき、つまり、タブがクリックされたときです。
 */

/*
.attr()は、HTML要素の属性を取得したり設定できるメソッドです。
ここでは、href属性を取得するように指定しています。

さらに、.show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになります。
どのときに表示されるかというと、$(this)のとき、つまり、タブがクリックされたときです。
これで完成です。
 */