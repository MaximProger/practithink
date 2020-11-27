$(document).ready(function () {
  // FAQ
  $("#hideFaqIntro").click(function () {
    $(this).parent(".faq__intro").slideUp();
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

        $("#companyname").fadeIn();
        $("#companyname").attr("required", true);
      } else {
        $("#companyname").hide();
        $("#companyname").attr("required", false);

        $("#account").fadeIn();
        $("#account").attr("required", true);
      }
    }
  });
});
