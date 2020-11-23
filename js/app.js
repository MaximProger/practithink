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
    $(".mask").fadeToggle();
    $(".cart").animate({ width: "toggle" }, 350);
  });

  // Total Price
  var $subtotal = $(".cart__total__number");

  function totalPrice() {
    var $prices = $(".cart__price__value");
    var sum = 0;

    $prices.each(function () {
      sum += parseInt($(this).text());
    });

    $subtotal.text(sum);
  }

  totalPrice();

  let defaultPrice;
  let finishPrice;
  // Увеличиваем счетчик товаров (корзина)
  $(".cart__body").on("click", ".cart__btn--more", function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() + 1);
    $(this).parent().find(".cart__btn--less").prop("disabled", false);
    // Цена 1-го товара
    defaultPrice = +$(this)
      .parent()
      .parent()
      .find(".cart__price__value")
      .data("price");
    // Цена * количество
    finishPrice = defaultPrice * +$(this).parent().find(".cart__input").val();
    $(this).parent().parent().find(".cart__price__value").text(finishPrice);

    totalPrice();
  });

  // Уменьшаем счетчик товаров (корзина)
  $(".cart__body").on("click", ".cart__btn--less", function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() - 1);

    if ($(this).parent().find(".cart__input").val() == 0) {
      $(this).parents(".cart__item").remove();
      $(this).parent().parent().find(".cart__price__value").text(0);
      // Cart Item Count
      let cartItemCount = +$(".cart__item").length;
      $(".basketCount").text(cartItemCount);
    } else {
      finishPrice = defaultPrice * +$(this).parent().find(".cart__input").val();
      $(this).parent().parent().find(".cart__price__value").text(finishPrice);
    }

    totalPrice();
  });

  // Увеличиваем счетчик товаров (страница оплатаы)
  $(".pay__list").on("click", ".cart__btn--more", function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() + 1);
    $(this).parent().find(".cart__btn--less").prop("disabled", false);
    // Цена 1-го товара
    defaultPrice = +$(this)
      .parent()
      .parent()
      .find(".cart__price__value")
      .data("price");
    // Цена * количество
    finishPrice = defaultPrice * +$(this).parent().find(".cart__input").val();
    $(this).parent().parent().find(".cart__price__value").text(finishPrice);

    totalPrice();
  });

  // Уменьшаем счетчик товаров (страница оплатаы)
  $(".pay__list").on("click", ".cart__btn--less", function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
      .find(".cart__input")
      .val(+$(this).parent().find(".cart__input").val() - 1);
    if ($(this).parent().find(".cart__input").val() == 0) {
      $(this).parents(".pay__list__item").slideUp();
      $(this).parent().parent().find(".cart__price__value").text(0);
    } else {
      finishPrice = defaultPrice * +$(this).parent().find(".cart__input").val();
      $(this).parent().parent().find(".cart__price__value").text(finishPrice);
    }

    totalPrice();
  });

  // Close Cart by mask
  $(".mask").click(function () {
    $(".mask").fadeOut();
    $(".cart").animate({ width: "hide" }, 500);
    $(".filter__active").animate({ width: "hide" }, 350);
    $(".modal__window").slideUp();
  });

  // Cart Item Count
  let cartItemCount = +$(".cart__item").length;
  $(".basketCount").text(cartItemCount);

  // Add to cart
  $(".catalog__buy").click(function () {
    // Открытие корзины
    $(".mask").fadeToggle();
    $(".cart").animate({ width: "toggle" }, 500);

    // Создание и добавление нового элемента
    let cartItem = $(this).parents(".catalog__item").clone();
    let cartItemDescription = "by: PractiThink";
    let cartItemTitle = cartItem.find(".catalog__item__title").text();
    let cartImgSrc = cartItem.find(".catalog__item__img").attr("src");
    let cartPrice = cartItem.find(".catalog__item__value").text();
    let cartID = cartItem.attr("id");

    // Если такой элемент уже есть, новый не добавлять
    if (!$(".cart__body").children("#" + cartID).length > 0) {
      let cartItemNew = `
    <div class="cart__item" id="${cartID}">
              <img src="${cartImgSrc}" alt="${cartItemTitle}" class="cart__img">
              <div class="cart__content">
                <div class="cart__content__title">${cartItemTitle}</div>
                <div class="cart__content__description">
                  ${cartItemDescription}
                </div>
                <div class="cart__content__wrapper">

                  <div class="cart__add__item">
                    <button class="cart__btn cart__btn--less" type="button">
                      <svg width="11" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.553 16.86c.13 0 .258-.036.367-.103a.623.623 0 00.242-.273.566.566 0 00.038-.352.596.596 0 00-.18-.312L2.356 8.739l7.662-7.081a.585.585 0 00.185-.429.587.587 0 00-.193-.425.688.688 0 00-.46-.179.69.69 0 00-.464.171L.957 8.308a.587.587 0 00-.192.431c0 .162.07.317.193.43l8.129 7.513a.665.665 0 00.214.132.72.72 0 00.252.046z"
                          fill="#C4C4C4" /></svg>
                    </button>
                    <input type="number" class="form-control cart__input" value="1" min="1" name="addcart" id="addcart">
                    <button class="cart__btn cart__btn--more" type="button">
                      <svg width="11" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.553 16.86c.13 0 .258-.036.367-.103a.623.623 0 00.242-.273.566.566 0 00.038-.352.596.596 0 00-.18-.312L2.356 8.739l7.662-7.081a.585.585 0 00.185-.429.587.587 0 00-.193-.425.688.688 0 00-.46-.179.69.69 0 00-.464.171L.957 8.308a.587.587 0 00-.192.431c0 .162.07.317.193.43l8.129 7.513a.665.665 0 00.214.132.72.72 0 00.252.046z"
                          fill="#C4C4C4" /></svg>
                    </button>
                  </div>

                  <div class="cart__price">$<span class="cart__price__value" data-price="20">${cartPrice}</span></div>
                </div>
              </div>
            </div>
    `;
      $(".cart__body").prepend(cartItemNew);

      cartItemCount = +$(".cart__item").length;
      $(".basketCount").text(cartItemCount);
    } else {
      // Иначе, увеличиваем его количество на 1
      let cartItemCount = +$(".cart__body")
        .children("#" + cartID)
        .find(".cart__input")
        .val();
      $(".cart__body")
        .children("#" + cartID)
        .find(".cart__input")
        .val(cartItemCount + 1);

      defaultPrice = +cartPrice;
      // Цена * количество
      finishPrice =
        defaultPrice *
        +$(".cart__body")
          .children("#" + cartID)
          .find(".cart__input")
          .val();

      $(".cart__body")
        .children("#" + cartID)
        .find(".cart__price__value")
        .text(finishPrice);

      $(".cart__body")
        .children("#" + cartID)
        .find(".cart__btn--less")
        .prop("disabled", false);
    }

    totalPrice();
  });

  // Modal
  $(".modal__btn").click(function () {
    $(".modal__window").slideUp();
    $(".mask").fadeOut();
  });

  $("#addReview").click(function () {
    $(".mask").fadeIn();
    $(".modal__window--reviews").slideDown();
  });

  $("#addComments").click(function () {
    $(".mask").fadeIn();
    $(".modal__window--comments").slideDown();
  });

  $("#addAsk").click(function () {
    $(".mask").fadeIn();
    $(".modal__window--questions").slideDown();
  });
});
