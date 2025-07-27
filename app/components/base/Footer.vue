<script setup lang="ts">
import {dateUtils} from '~~/shared/utils';

const fromYear = 2025;
const toYear = dateUtils.getCurrentYear();
const copyrightYears = fromYear === toYear ? fromYear : `${fromYear} - ${toYear}`;
</script>

<template>
    <footer class="bg-black pt-6 pb-6 site-footer">
        <div class="footer-container">
            <hr>

            <div class="copyright">
                <small>{{ copyrightYears }} MOKUTON wood design</small>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    color: #e8e6e7;

    &.site-footer {
        .footer-container {
            display: grid;
            grid-row-gap: 2rem;
        }

        .copyright {
            justify-self: center;
        }
    }
}
</style>