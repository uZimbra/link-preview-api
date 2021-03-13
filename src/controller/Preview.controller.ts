import { load } from 'cheerio';
import fetch from 'node-fetch';

interface IGetRequest {
  url: string;
}

interface IGetResponse {
  url: string;
  domain: string;
  title: string;
  img?: string;
  description: string;
}

class PreviewController {
  async getController({ url }: IGetRequest ): Promise<IGetResponse> {
    const urlData = await fetch(url)
    const rawData = await urlData.text()
    const $ = load(rawData)

    const getMetaTag = (name: string) => {
      return(
        $(`meta[name=${name}]`).attr('content') ||  
        $(`meta[name="og:${name}"]`).attr('content') ||  
        $(`meta[name="twitter:${name}"]`).attr('content') ||
        $(`meta[property=${name}]`).attr('content') ||  
        $(`meta[property="og:${name}"]`).attr('content') ||  
        $(`meta[property="twitter:${name}"]`).attr('content')
      )
    }

    const metaTagData = {
      url,
      domain: new URL(url).hostname,
      title: getMetaTag('title') || $(`h1`).text(),
      img: getMetaTag('image') || './images/no-image.png',
      description: getMetaTag('description') || $(`p`).text() || 'No description available',
    }

    // let { description } = metaTagData

    // // avoiding description to be more then 100 chars
    // if (description.length > 100) {
    //   metaTagData.description = description.substring(0, 100) + '...'
    // }

    return metaTagData
  }
}

export { PreviewController }