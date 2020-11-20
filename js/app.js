$(document).ready(function () {
  // WOW JS
  new WOW().init();

  // Student
  let totalCost = 0;
  const priceDefualt = 12;
  $(".student__price__value").text(priceDefualt);

  // Увеличиваем счетчик
  $(".student__btn--more").click(function (evt) {
    evt.preventDefault();
    $(".student__input").val(+$(".student__input").val() + 1);
    $(".student__btn--less").prop("disabled", false);
    totalCost = priceDefualt + (+$(".student__input").val() - 1) * 4; // расчитываем value
    $(".student__price__value").text(totalCost);
  });

  // Уменьшаем счетчик
  $(".student__btn--less").click(function (evt) {
    evt.preventDefault();
    $(".student__input").val(+$(".student__input").val() - 1);
    totalCost = totalCost - 4; // расчитываем value
    $(".student__price__value").text(totalCost);
    // еслм  value = 1 - блокируем кнопку
    if ($(".student__input").val() <= 1) $(this).prop("disabled", true);
  });

  // Switch
  $(".switch__btn").click(function (evt) {
    evt.preventDefault();
    $(".switch__btn").toggleClass("switch__btn--active");
    $(".choose__logo").fadeToggle();
    $(".choose__body").toggleClass("choose__body--active");
  });

  // Tarifs
  $(".choose__tarif").click(function () {
    $(".choose__tarif").removeClass("choose__tarif--active");
    $(this).addClass("choose__tarif--active");
  });

  // Inputs
  $(".payment__input--special").focus(function () {
    $(this)
      .parent()
      .parent()
      .find(".payment__label")
      .addClass("payment__label--active");
    $(this).attr("placeholder", "");
  });

  $(".payment__input--special").blur(function () {
    let labelText = $(this)
      .parent()
      .parent()
      .find(".payment__label")
      .text()
      .trim();
    $(this)
      .parent()
      .parent()
      .find(".payment__label")
      .removeClass("payment__label--active");
    $(this).attr("placeholder", labelText);
  });

  // Nav
  $(".enter__nav__item").click(function () {
    $(".enter__nav__item").removeClass("enter__nav__item--active");
    $(this).addClass("enter__nav__item--active");
    $(".enter__body").toggleClass("enter__body--active");
  });
});
