class Cookie_class {

    getCookie(name) {

        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    setCookie(name, value, props) {

        props = props || {}

        let exp = props.expires

        if (typeof exp == "number" && exp) {

            let d = new Date()

            d.setTime(d.getTime() + exp*1000)

            exp = props.expires = d

        }

        if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

        value = encodeURIComponent(value)

        let updatedCookie = name + "=" + value

        for(let propName in props){

            updatedCookie += "; " + propName

            let propValue = props[propName]

            if(propValue !== true){ updatedCookie += "=" + propValue }
        }

        document.cookie = updatedCookie

    }

    deleteCookie(name) {

        this.setCookie(name, null, { expires: -1 })

    }
}

export var Cookie = new Cookie_class();