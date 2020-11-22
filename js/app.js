$(document).ready(function () {
  // Student
  let totalCost = 0;
  let priceDefualt = +$(".choose__tarif--active")
    .find(".choose__vprice__value")
    .text();
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
    priceDefualt = +$(".choose__tarif--active")
      .find(".choose__vprice__value")
      .text();
    $(".student__price__value").text(priceDefualt);
    totalCost = 0;
    $(".student__input").val(1);
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

  // Cart
  $("#cartClose").click(function () {
    $(".cart__mask").fadeToggle();
    $(".cart").animate({ width: "toggle" }, 350);
  });

  $(".catalog__buy").click(function () {
    $(".cart__mask").fadeToggle();
    $(".cart").animate({ width: "toggle" }, 350);
  });

  // Итоговая цена
  var $subtotal = $(".cart__total__number");
  var $prices = $(".cart__price__value");
  var sum = 0;

  $prices.each(function () {
    sum += parseInt($(this).text());
  });

  $subtotal.text(sum);

  let defaulPrice;
  let finshPrice;
  // Увеличиваем счетчик товаров (корзина)
  $(".cart__btn--more").click(function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() + 1);
    $(this).parent().find(".cart__btn--less").prop("disabled", false);
    // Цена 1-го товара
    defaulPrice = +$(this)
      .parent()
      .parent()
      .find(".cart__price__value")
      .data("price");
    // Цена * количество
    finshPrice = defaulPrice * +$(this).parent().find(".cart__input").val();
    $(this).parent().parent().find(".cart__price__value").text(finshPrice);

    sum = 0;
    $prices.each(function () {
      sum += parseInt($(this).text());
    });

    $subtotal.text(sum);
  });

  // Уменьшаем счетчик товаров (корзина)
  $(".cart__btn--less").click(function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() - 1);
    if ($(this).parent().find(".cart__input").val() <= 1)
      $(this).prop("disabled", true);

    finshPrice = defaulPrice * +$(this).parent().find(".cart__input").val();
    $(this).parent().parent().find(".cart__price__value").text(finshPrice);

    sum = 0;
    $prices.each(function () {
      sum += parseInt($(this).text());
    });

    $subtotal.text(sum);
  });

  // Add to cart
  $(".catalog__buy").click(function () {
    let cartItem = $(this).parents(".catalog__item").clone();
    console.log(cartItem);
    let cartItemTitle = cartItem.find(".catalog__item__title").text();
    console.log(cartItemTitle);
  });
});
