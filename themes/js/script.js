var $=jQuery;document.addEventListener('DOMContentLoaded',()=>{$.each($('.article_text h2'),function(indexInArray){$(this).attr('id','title'+indexInArray)
let name=$(this).text(),link=$(this).attr('id')
console.log(name)
$(`<li><a href="#${link}" class="toc-block__link" itemprop="url" title="${name}">${name}</a></li>`).appendTo('.toc-block__list')});if($('.toc-block .toc-block__list li').length===0){$('.toc-block').css('display','none')}})
$('.dual-menu-mobile .dual-menu-mobile__item .dual-menu-mobile__link').each((index,item)=>{const $menu_link=$(item);const $inner=$menu_link.next('.dual-menu-mobile__inner')
if(!$inner.length){return}
$inner.css('display','none')
$menu_link.on('click',(event)=>{event.preventDefault()
if($inner.css('display')==='none'){$inner.css('display','flex')}else{$inner.css('display','none')}})})
$('aside').remove();var swiper_webinars=new Swiper('.swiper_webinars',{direction:'horizontal',loop:!1,slidesPerView:'auto',spaceBetween:40,freeMode:!0,navigation:{nextEl:'.webinar_btn_next',prevEl:'.webinar_btn_prev',},breakpoints:{1:{slidesPerView:'auto',spaceBetween:24,freeMode:!0,},650:{slidesPerView:2,spaceBetween:24,},993:{slidesPerView:'auto',spaceBetween:40,},}});var swiper_webinars_article=new Swiper('.article_item .swiper_webinars',{direction:'horizontal',loop:!1,slidesPerView:1,spaceBetween:24,freeMode:!0,navigation:{nextEl:'.webinar_btn_next',prevEl:'.webinar_btn_prev',},breakpoints:{1:{slidesPerView:'auto',spaceBetween:24,},650:{slidesPerView:'auto',spaceBetween:24,},993:{slidesPerView:2,spaceBetween:24,},}});var swiper_list=$("[data-slider-id]");$(swiper_list).each(function(){let swiper_slide_id=$(this).attr('data-slider-id');console.log(swiper_slide_id)
var article_swiper_thumb=new Swiper('.article_swiper_thumb'+swiper_slide_id,{direction:'horizontal',loop:!1,slidesPerView:6,spaceBetween:16,freeMode:!0,watchSlidesProgress:!0,breakpoints:{1:{slidesPerView:'auto',spaceBetween:24,freeMode:!0,},650:{slidesPerView:5,spaceBetween:8,},993:{slidesPerView:6,spaceBetween:16,},}});var article_swiper_big=new Swiper('.article_swiper_big'+swiper_slide_id,{direction:'horizontal',loop:!1,slidesPerView:1,spaceBetween:0,navigation:{nextEl:'.article_swiper_btn_next',prevEl:'.article_swiper_btn_prev',},thumbs:{swiper:article_swiper_thumb,},on:{init:function(){$('.article_swiper_big').each(function(){let caption=$(this).find('.swiper-slide-active .caption_slide').html()
$(this).parent().find('figcaption').html(caption)})}}});article_swiper_big.on('slideChangeTransitionEnd',function(){$('.article_swiper_big').each(function(){let caption=$(this).find('.swiper-slide-active .caption_slide').html()
$(this).parent().find('figcaption').html(caption)})})})
var swiper_article_category=new Swiper('.swiper_article_category',{direction:'horizontal',loop:!1,slidesPerView:3,spaceBetween:48,navigation:{nextEl:'.article_head_btn_next',prevEl:'.article_head_btn_prev',},breakpoints:{1:{slidesPerView:1,spaceBetween:24,freeMode:!0,},767:{slidesPerView:2,spaceBetween:32,},1100:{slidesPerView:3,spaceBetween:48,},}});$('.header .burger_btn').on('click',function(){$(this).toggleClass('active')
$('.header .burger_menu').toggleClass('active')
$('.header').toggleClass('active')
$('html').toggleClass('lock')});$('.header_sticky .burger_btn').on('click',function(){$(this).toggleClass('active')
$('.header_sticky .burger_menu').toggleClass('active')
$('.header_sticky').toggleClass('open')
$('.header').toggleClass('active')
$('html').toggleClass('lock')});var block_show=null;function scrollTracking(){var wt=$(window).scrollTop();var wh=$(window).height();var et=$('.header').offset().top;var eh=$('.header').outerHeight();if(wt+wh>=et&&wt+wh-eh*2<=et+(wh-eh)){if(block_show==null||block_show==!1){$('.header_sticky').removeClass('active')}
block_show=!0}else{if(block_show==null||block_show==!0){$('.header_sticky').addClass('active')}
block_show=!1}}
$(window).scroll(function(){scrollTracking()});$(document).ready(function(){scrollTracking()});$('.author_theme_item').on('click',function(){$('.author_theme_item').removeClass('active')
$(this).addClass('active')})
$('.header .search_icon').on('click',function(){$('.search_block').addClass('active')
$('.header_nav').addClass('visible')
$('.header').addClass('active')})
$('.header .seacrh_icon_close').on('click',function(){$('.search_block').removeClass('active')
$('.header_nav').removeClass('visible')
$('.header').removeClass('active')})
$('.header_sticky .search_icon').on('click',function(){$('.search_block').addClass('active')
$('.header_nav').addClass('visible')
$('.header').addClass('active')})
$('.header_sticky .seacrh_icon_close').on('click',function(){$('.search_block').removeClass('active')
$('.header_nav').removeClass('visible')
$('.header').removeClass('active')})
$('.header .search_val').on("change input",function(){let search_value=$(this).val();if($(this).val().length>2){$.ajax({url:"/media/wp-admin/admin-ajax.php",type:"POST",data:{"action":"ajax_search","term":search_value},success:function(results){$('.header .header_search_list').addClass('active');$('.header .header_search_list').html(results)}})}else{$('.header .header_search_list').removeClass('active')}});$('.header_sticky .search_val').on("change input",function(){let search_value=$(this).val();if($(this).val().length>2){$.ajax({url:"/media/wp-admin/admin-ajax.php",type:"POST",data:{"action":"ajax_search","term":search_value},success:function(results){$('.header_sticky .header_search_list').addClass('active');$('.header_sticky .header_search_list').html(results)}})}else{$('.header_sticky .header_search_list').removeClass('active')}});$(document).mouseup(function(e){var container=$(".search_block");if(container.has(e.target).length===0){container.removeClass('active');$('.header').removeClass('active')}
if(container.hasClass('active')){$('.header_nav').addClass('visible')}else{$('.header_nav').removeClass('visible');$('.header').removeClass('active')}});$(document).mouseup(function(e){var container=$(".header_search_list");if(container.has(e.target).length===0){container.removeClass('active')}});$(".open-modal").on("click",function(){$('[data-modal="'+$(this).data('modal')+'"]').addClass("open")});$(".close-modal").on("click",function(){$('[data-modal="'+$(this).data('modal')+'"]').removeClass("open")});$(document).mouseup(function(e){var container=$(".popup_thx");if(container.has(e.target).length===0){container.removeClass('open')}});$(document).mouseup(function(e){var container_2=$(".popup_placeholder");if(container_2.has(e.target).length===0){container_2.removeClass('open')}});$('.article_accordion_item').on('click',function(){$(this).toggleClass('active')
$(this).find('.article_accordion_item_title').next().slideToggle(300)})
$('.article_menu ul li a').on('click',function(){$('.article_menu ul li a').removeClass('active')
$(this).addClass('active')});$('.subscribe_btn').on('mousedown',function(){$(this).css('background','#FFD7D6')});$('.subscribe_btn').on('mouseup',function(){$(this).css('background','#FF9E00')});Fancybox.bind('[data-custom="custom"], .wp-caption a',{Carousel:{Navigation:{prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',},},Thumbs:{autoStart:!1,},Toolbar:{display:[{id:"counter",position:"center"},"close",],},});Fancybox.defaults.ScrollLock=!1;$('input[type="tel"]').inputmask("+7 (999) 999 99 99");document.addEventListener('wpcf7mailsent',function(event){if(event.detail.contactFormId=='1246'){$('.subscribe_btn_block input').addClass('active')
$('.subscribe_btn_block input').val('Ты с нами, круто!')
$('.subscribe_btn_block').addClass('active')
$('.popup_thx').addClass('open')}else if(event.detail.contactFormId=='1261'){console.log('test');$('.popup_thx').addClass('open')}else{$('.popup_thx_s').addClass('open')}},!1);$('.btn_sky.open').on('click',function(){$('.popup_first').addClass('open');return!1})
function bannerCall(){$('.popup_banner').addClass('open')}
function heightBanner(){let hb=$('.popup_banner').height();$('body').css('margin-top',hb)
bannerCall()
if($(window).width()<650){let hb=$('.popup_banner').height()+10;let top=10;$('.popup_banner').css('top',top)
$('body').css('margin-top',hb)}}
$('.copylink').on('click',function(){let url=document.location.href;navigator.clipboard.writeText(url).then(function(){console.log('Copied!')},function(){console.log('Copy error')});return!1})
$('.uslugi_page_wrapper_item').each(function(){if($(this).find('.uslugi_page_wrapper_item_text p').length<1){$(this).find('.accordion').css('display','none')}})
$('.load_users').on('click',function(){var index=$('.load_users').attr('data-index');$.ajax({url:'/media/wp-admin/admin-ajax.php',type:'POST',data:'action=authors&index_param='+index,beforeSend:function(xhr){$('.author_page_blog_wrapper .btn_more').addClass('loading')},success:function(data){var index=$('.load_users').attr('data-index');index=parseInt(index)+16;$('.load_users').attr('data-index',index);$('.author_page_blog_wrapper .btn_more').removeClass('loading');$('.author_page_blog_wrapper.row').append(data);console.log(data)}});return!1});document.addEventListener('wpcf7mailsent',function(event){var id=event.detail.contactFormId,info=event.detail.inputs;info[7].name='name';if(id==11016){var targetUrl='https://api.sky.pro/api/v1/lead/tilda';$.ajax({type:'POST',crossDomain:!0,url:targetUrl,data:info,success:function(data){}})}},!1);$('.block_profession_item_data').on('focus','form',function(){$('.block_profession_item_data input[name="COOKIES"]').val(encodeURIComponent(document.cookie));$('.block_profession_item_data input[name="queryParams"]').val(encodeURIComponent(location.search));$('.block_profession_item_data input[name="url"]').val(encodeURIComponent(location.href));$('.block_profession_item_data input[name="funnel"]').val('direct')})
if($('aside').text().includes('https')){}
$(document).on('click','aside a, aside iframe',function(){})

