import { debounce } from "./utils"

import BackTop from "@/components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
    data() {
        return {

            refresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 500);
        /* this.$bus.$on("detailImageLoad", () => {
            this.refresh();
        }); */
        this.$bus.$on("detailItemImageLoad", () => {
            this.refresh();
        });
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        ListenShowBackTop(position) {
            this.isShowBackTop = -position.y > 500;

        }
    }
}