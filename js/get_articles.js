"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var articles_box = document.querySelector('.categoryofarticles__articles');
  var new_articles_container = document.querySelector('.newarticles__wrapper');
  new_articles_container.innerHTML = '<div class="loader"></div>';
  articles_box.innerHTML = '<div class="loader"></div>';
  setTimeout(function () {
    fetch('data.json').then(function (resp) {
      return resp.json();
    }).then(function (data) {
      new_articles_container.innerHTML = "\n                    <div class=\"newarticles__firstarticle\"></div>\n                    <div class=\"newarticles__secondarticle-wrapper\"></div>\n                ";
      var articles = data.channel.item;
      var new_articles_box = document.querySelector('.newarticles__firstarticle');
      articles.forEach(function (article, i) {
        fetch('scripts/articles_images.php', {
          method: 'POST',
          body: JSON.stringify({
            url: article.link
          })
        }).then(function (res) {
          return res.text();
        }).then(function (html) {
          console.log(html);
        });

        if (i < 1) {
          new_articles_box.innerHTML += "\n                            <div class=\"newarticles__firstarticle-img\">\n                                <img src=\"images/pictures/articles-img1.png\" alt=\"\">\n                            </div>\n                            <div class=\"newarticles__firstarticle-title text-hover\">\n                                <a href=\"\"> ".concat(article.title.__cdata, " </a>\n                            </div>\n                            <div class=\"newarticles__firstarticle-info\">\n                                <div class=\"banner__articles-author\">\n                                    <div class=\"author__avatar\">\n                                        <img src=\"images/pictures/author__avatar.png\" alt=\"\">\n                                    </div>\n                                    <div class=\"author__name\">").concat(article.creator.__cdata, "</div>\n                                </div>\n                                <div class=\"banner__articles-info\">\n                                    <div class=\"info__date\">").concat(article.post_date.__cdata.split(' ')[0], "</div>\n                                    <div class=\"info__view\">\n                                        <img src=\"images/icons/view.svg\" alt=\"\">\n                                        889\n                                    </div>\n                                </div>\n                            </div>\n                        ");
        }
      });
      articles.forEach(function (article, i) {
        var second_article_const = document.querySelector('.newarticles__secondarticle-wrapper');

        if (i < 4) {
          second_article_const.innerHTML += "\n                            <div class=\"newarticles__secondarticle-item\">\n                                <div class=\"newarticles__secondarticle-item-title text-hover\">\n                                    <a href=\"\"> ".concat(article.title.__cdata, " </a>\n                                </div>\n                                <div class=\"newarticles__secondarticle-item-info\">\n                                    <div class=\"banner__articles-author\">\n                                        <div class=\"author__avatar\">\n                                            <img src=\"images/pictures/author__avatar.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"author__name\">").concat(article.creator.__cdata, "</div>\n                                    </div>\n                                    <div class=\"banner__articles-info\">\n                                        <div class=\"info__date\">").concat(article.post_date.__cdata.split(' ')[0], "</div>\n                                        <div class=\"info__view\">\n                                            <img src=\"images/icons/view.svg\" alt=\"\">\n                                            889\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        ");
        }
      });
      articles_box.innerHTML = '';
      articles.forEach(function (article, i) {
        if (i < 6) {
          articles_box.innerHTML += "\n                            <div class=\"categoryofarticles__articles-item\">\n                                <div class=\"categoryofarticles__articles-item__img\">\n                                    <img src=\"images/pictures/articles-img2.png\" alt=\"\">\n                                </div>\n                                <div class=\"categoryofarticles__articles-item__title text-hover\">\n                                    <a href=\"\"> ".concat(article.title.__cdata, " </a>\n                                </div>\n                                <div class=\"categoryofarticles__articles-item__info\">\n                                    <div class=\"banner__articles-author\">\n                                        <div class=\"author__avatar\">\n                                            <img src=\"images/pictures/author__avatar.png\" alt=\"\">\n                                        </div>\n                                        <div class=\"author__name\">").concat(article.creator.__cdata, "</div>\n                                    </div>\n                                    <div class=\"banner__articles-info\">\n                                        <div class=\"info__date\">").concat(article.post_date.__cdata.split(' ')[0], " </div>\n                                        <div class=\"info__view\">\n                                            <img src=\"images/icons/view.svg\" alt=\"\">\n                                            1056\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        ");
        }
      });
    });
  }, 10);
});