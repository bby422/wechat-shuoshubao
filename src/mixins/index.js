import wepy from 'wepy'
import {time} from '@/utils/time'

export default class extends wepy.mixin {
    data = {
        BuildTime: time(Date.now())
    }
    methods = {

    }

    onShow() {

    }

    onLoad() {

    }
}
