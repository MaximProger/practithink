$(document).ready(function () {
  // Избранное
  // Отображение в шапке
  let favoriteCount = $(".catalor__item__heart--active").length;
  $("#favoriteCount").text(favoriteCount);

  // Добавление/удаление избранного
  $(".catalor__item__heart").click(function () {
    $(this).toggleClass("catalor__item__heart--active");

    favoriteCount = $(".catalor__item__heart--active").length;
    $("#favoriteCount").text(favoriteCount);
  });

  // Кнопки в паннели
  $(".pannel__btn").click(function () {
    $(this).toggleClass("pannel__btn--active");
  });

  // Ссылки в фильтре
  $(".catalog__filter__link").click(function (evt) {
    evt.preventDefault();
    $(this).toggleClass("catalog__filter__link--active");
    $(".mask").fadeOut();
    $(".catalog__filter").animate({ width: "hide" }, 350);
  });

  // Сортировки
  $(".catalog__sort__arrow").click(function () {
    // $(".catalog__sort__list").removeClass("catalog__sort__list--active");
    $(this).toggleClass("catalog__sort__arrow--active");
    $(this)
      .parent()
      .parent()
      .find(".catalog__sort__list")
      .toggleClass("catalog__sort__list--active");
  });

  $(".catalog__sort__value").click(function () {
    $(".catalog__sort__arrow").removeClass("catalog__sort__arrow--active");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".catalog__sort__list")
      .removeClass("catalog__sort__list--active");

    $(this).parent().parent().find(".catalog__sort__text").text($(this).text());
  });

  // Detail
  // Tabs
  $(".detail__nav__item").click(function () {
    $(".detail__nav__item").removeClass("detail__nav__item--active");
    $(this).addClass("detail__nav__item--active");
    $(".detail__section__hidden").removeClass(
      "detail__section__hidden--active"
    );
    let currentID = $(this).attr("id");
    $("[data-nav=" + currentID + "]").addClass(
      "detail__section__hidden--active"
    );
  });

  // Preview Slider
  if ($("#previewSlider").length && $("#previewNav").length) {
    $("#previewSlider").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: false,
      asNavFor: "#previewNav",
    });

    $("#previewNav").not(".slick-initialized").slick({
      arrows: false,
      slidesToShow: 4,
      asNavFor: "#previewSlider",
      focusOnSelect: true,
    });
  }

  // Reviews Slider
  if ($("#reviewsSlider").length) {
    $("#reviewsSlider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        nextArrow: $("#reviewsNext"),
        prevArrow: $("#reviewsPrev"),
      });
  }

  // Delite Mark
  $(".detail__mark__close").click(function () {
    $(this).parent().fadeOut();
  });

  // Questions
  $(".detail__question__btn").click(function () {
    $(this).parent().toggleClass("detail__question__head--active");
  });

  // Open Filter
  $("#openFilter").click(function () {
    $("#filter").animate({ width: "toggle" }, 350);
    $("#filter").addClass("filter__active");
    $(".mask").fadeToggle();
  });

  // Rating
  $(".review__star").click(function () {
    $(".review__star").removeClass("detail__star--active");
    $(this).addClass("detail__star--active");

    if ($(this).hasClass("review__star--1")) {
      $(".review__star").addClass("detail__star--active");
      $(".rating__item__value").text("5.0 Excellent");
    } else if ($(this).hasClass("review__star--2")) {
      $(".review__star--3").addClass("detail__star--active");
      $(".review__star--4").addClass("detail__star--active");
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("4.0 Good");
    } else if ($(this).hasClass("review__star--3")) {
      $(".review__star--4").addClass("detail__star--active");
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("3.0 Satisfactorily");
    } else if ($(this).hasClass("review__star--4")) {
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("2.0 Weakly");
    } else {
      $(".rating__item__value").text("1.0 Unsatisfactory");
    }
  });
});
