$(document).ready(function () {
  // FAQ
  $("#hideFaqIntro").click(function () {
    $("#faqIntroAbsolute").hide();
    $("#faqIntroStatic").fadeIn();
  });

  // Questions
  $(".faq__list__head").click(function () {
    $(".faq__list__body").slideUp();

    if ($(this).parent(".faq__list__item").hasClass("faq__list__item--show")) {
      $(this).parent(".faq__list__item").find(".faq__list__body").slideUp();
      $(this).parent(".faq__list__item").removeClass("faq__list__item--show");
    } else {
      $(".faq__list__item").removeClass("faq__list__item--show");
      $(this).parent(".faq__list__item").addClass("faq__list__item--show");
      $(this).parent(".faq__list__item").find(".faq__list__body").slideDown();
    }
  });

  // Select
  $(".select").click(function () {
    $(".select").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });

  $(".select__checkbox__item").click(function () {
    $(this).toggleClass("active");
    $(this).parents(".select").find(".select__title").addClass("active");
    $(this)
      .parents(".select")
      .find(".select__title")
      .text($(this).find(".select__label").text());
  });

  $(".select__list__item").click(function () {
    $(this).parents(".select").find(".select__title").addClass("active");
    $(this).parents(".select").find(".select__title").text($(this).text());
    $(".select__list__item").removeClass("active");
    $(this).addClass("active");

    if ($(this).parents(".select").attr("id") == "contactSelect") {
      // Задаем значение скрытому полю
      $("#contactSelectInput").val($(this).text());

      // Выводим поле, в зависимости от значения
      if ($(this).data("contact") == "company") {
        $("#account").hide();
        $("#account").attr("required", false);

        $("#social").fadeIn();
        $("#social").attr("required", true);

        $(".contact__inner__input--none").removeClass(
          "contact__inner__input--none--active"
        );
      } else {
        $("#social").hide();
        $("#social").attr("required", false);

        $("#account").fadeIn();
        $("#account").attr("required", true);

        $(".contact__inner__input--none").addClass(
          "contact__inner__input--none--active"
        );

        $(".contact__inner__input--none").attr("required", false);
      }
    }
  });

  // Nav Link
  $(".nav__inner__item").click(function (evt) {
    evt.preventDefault();
    $(".nav__inner__item").removeClass("nav__inner__item--active");
    $(this).addClass("nav__inner__item--active");
    let navItemId = $(this).attr("id");
    $(".detail__support--faq").removeClass("detail__support--faq--active");
    $("[data-question=" + navItemId + "]").addClass(
      "detail__support--faq--active"
    );
  });
});
