//wowjs
new WOW().init();


//スクロール
jQuery('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const targetId = jQuery(this).attr('href');
    const $target = jQuery(targetId);
    const offset = 30; // 上に空けたい余白

    if ($target.length) {
        // スクロール対象要素内での相対位置を取得
        const targetTop = $target.offset().top - offset;

        jQuery('html, body').animate({ scrollTop: targetTop }, 400);
    }
});

// ドロワーメニュー内のリンクを押したら、メニューを閉じる
jQuery('.drawer__nav-item a[href^="#"]').on('click', function () {
  // ドロワーを閉じる
  setTimeout(function () {
    jQuery('.drawer-content').removeClass('is-active');
    jQuery('.drawer-icon').removeClass('is-active');
  }, 300);
});

//drawer
jQuery('.drawer-icon').on('click',function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');

    return false;
  });

//アコーディオンメニューFAQ
jQuery(document).ready(function () {
  const $faqItems = jQuery('.lp__faq-item');
  
  // 初期表示：1つ目だけ開く
  $faqItems.each(function (index) {
    const $answer = jQuery(this).find('.lp__faq-item-a');
    const $btn = jQuery(this).find('.lp__faq-item-q-btn');

    if (index === 0) {
      $answer.show();
      $btn.addClass('is-open');
    } else {
      $answer.hide();
    }
  });

  // クリックで開閉
  jQuery('.lp__faq-item-q').on('click', function () {
    const $item = jQuery(this).closest('.lp__faq-item');
    const $answer = $item.find('.lp__faq-item-a');
    const $btn = $item.find('.lp__faq-item-q-btn');

    $answer.slideToggle(300);
    $btn.toggleClass('is-open');
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1500,
  spaceBetween: 25,

  // Navigation arrows
  navigation: {
    nextEl: '.lp__schedule-plan-swipe',
  },
});