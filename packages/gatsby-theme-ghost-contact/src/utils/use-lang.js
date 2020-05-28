import { graphql, useStaticQuery } from "gatsby"
import lang from './lang'

const useLang = (locale) => {
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                locale
            }
        }
    }`)

    return lang[locale || data.site.siteMetadata.locale]
}

const get = text => (name) => {
    if (text[name] === undefined) {
        throw new Error(`Cannot find ${name} in lang file.`)
    }

    return text[name]
}

export { useLang, get }
