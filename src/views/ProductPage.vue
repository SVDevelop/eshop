<template>
    <div>
        <div class="container p-0">
            <div class="heading-1">Квартира Студия, 45,5 м2 за 4 250 000 ₽ </div>

            <!-- object -->
            <div class="object">

                <!-- object__photo -->
                <div class="object__photo">
                    <div class="object__photo-wrapper">
                        <img src="img/slider-item/photo.png" alt="">
                    </div>

                    <div class="object__photo-prev">
                        <img src="img/slider-item/left.png" alt="">
                    </div>
                    <div class="object__photo-next">
                        <img src="img/slider-item/right.png" alt="">
                    </div>

                    <div class="object__photo-slider-nav slider-nav">
                        <div class="slider-nav__dot slider-nav__dot--active"></div>
                        <div class="slider-nav__dot"></div>
                        <div class="slider-nav__dot"></div>
                        <div class="slider-nav__dot"></div>
                    </div>
                </div>
                <!-- // object__photo -->

                <!-- object__desc -->
                <div class="object__desc">

                    <div class="object__desc-name">
                        <div class="object__desc-title">Студия, 45,5 м2</div>
                        <div class="button-favourite">
                            <i class="fas fa-heart"></i> В избранное
                        </div>
                    </div>

                    <div class="object__desc-details">

                        <!-- params -->
                        <div class="params">
                            <div class="params__item">
                                <div class="params__definition">Корпус</div>
                                <div class="params__value">3</div>
                            </div>
                            <div class="params__item">
                                <div class="params__definition">Секция</div>
                                <div class="params__value">1</div>
                            </div>
                            <div class="params__item">
                                <div class="params__definition">Этаж</div>
                                <div class="params__value">8</div>
                            </div>
                            <div class="params__item">
                                <div class="params__definition">Номер</div>
                                <div class="params__value">121</div>
                            </div>
                        </div>
                        <!-- // params -->

                    </div>

                    <div class="details">
                        <div class="details__row">
                            <div class="details__name">Стоимость</div>
                            <div class="details__value details__value--price">4 200 000 ₽</div>
                        </div>
                        <div class="details__row">
                            <div class="details__name">Цена за м2</div>
                            <div class="details__value">64 000 ₽/м2</div>
                        </div>
                    </div>

                    <div class="button-order">Забронировать</div>
                    <div class="button-preview">Записаться на просмотр</div>

                </div>
                <!-- // object__desc -->

            </div>
            <!-- // object -->

        </div>

        <div class="container">
            <div class="heading-slider">Галерея комплекса</div>
        </div>

        <div class="slider">
            <div class="slider__photo-wrapper">
                <div class="slider__photo">
                    <img src="img/gallery/img.jpg" alt="">
                </div>
            </div>
            <div class="slider__control slider__control--prev slider__control--disabled">
                <img src="img/gallery/gallery-prev.png" alt="">
            </div>
            <div class="slider__control slider__control--next">
                <img src="img/gallery/gallery-next.png" alt="">
            </div>
        </div>

        <div class="container">
            <a href="#" class="back-to-results">← Вернуться к результатам поиска</a>
        </div>
    </div>
</template>

<script>
    export default {
        component: {
            productId () {
                return this.$route
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>