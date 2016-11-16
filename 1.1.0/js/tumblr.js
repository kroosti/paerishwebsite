(function($) {
    'use strict';

      var limit = 25;
      var url = "http://paerish.tumblr.com";
      var idtag = "#portfolio-grid-container-lal";


      $.getJSON(url+'/api/read/json?num='+limit+'&callback=?', function(data) {

        $.each(data.posts, function(i,posts){
          if(posts.type == 'video'){
            displayVideoPost(posts);
          } else if(posts.type == 'link'){
            //displayLinkPost(posts);
          } else if(posts.type == 'regular'){
            //displayTextPost(posts);
          } else if(posts.type == 'photo'){
            displayPhotoPost(posts);
          }
        });

        var portfolioGrid = $('#portfolio-grid-container-lal');

        portfolioGrid.cubeportfolio({
            filters: '#filters-container',
//            loadMore: '#loadMore-container',
//            loadMoreAction: 'click',
            layoutMode: 'grid',
            rewindNav: true,
            scrollByPage: false,
            defaultFilter: '*',
            animationType: portfolioGrid.data('animationtype'),
            gapHorizontal: portfolioGrid.data('gaphorizontal'),
            gapVertical: portfolioGrid.data('gapvertical'),
            gridAdjustment: 'responsive',
            mediaQueries: [{
                    width: 1100,
                    cols: 2
                }, {
                    width: 800,
                    cols: 2
                }, {
                    width: 500,
                    cols: 2
                }, {
                    width: 320,
                    cols: 1
                }],
            caption: portfolioGrid.data('caption'),
            displayType: 'lazyLoading',
            displayTypeSpeed: 100,
            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
            // singlePage popup
            singlePageDelegate: '.cbp-singlePage',
            singlePageDeeplinking: true,
            singlePageStickyNavigation: true,
            singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        });


        $(document).ready(function() {
          $(".video-tumbler .cbp-item-wrapper").css("background-color","transparent");
          $(".video-tumbler .cbp-item-wrapper iframe").css("margin","auto");
          $("h2#title").css("color","transparent");

        });
      });


    function displayVideoPost(posts){
      if(posts == null) return;

      $(idtag).append('<div class="cbp-item video-tumbler"> '  + posts['video-player-500']  + ' </div>');

    }

    function displayPhotoPost(posts){
      if(posts == null) return;

      var ptitle = $(posts['photo-caption']).text();
      var psrc = posts['photo-url-400'] || posts['photo-url-500'];

      $(idtag).append('<div class="cbp-item"> <a class="cbp-caption cbp-singlePage" data-title="' + ptitle + '"> <div class="cbp-caption-defaultWrap"> <img src="' + psrc + '" alt=""> </div> <div class="cbp-caption-activeWrap"> <div class="cbp-l-caption-alignLeft"> <div class="cbp-l-caption-body"> <div class="cbp-l-caption-title"> </div> <div class="cbp-l-caption-desc">' + ptitle + '</div> </div> </div> </div> </a> </div>');

    }



})(jQuery);
