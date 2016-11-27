import { action, observable } from 'mobx'

import api from '../api'
import LoadingData from './LoadingData'

class PostData {
  @observable title
  @observable date
  @observable content
  @observable featured
  @observable slug

  @action resetObs() {
    this.title = ''
    this.date = ''
    this.content = ''
    this.featured = ''
  }

  fetchPost(slug) {
    // set @observable slug for prevent always rendering
    this.slug = slug

    // clear data
    this.resetObs()

    // set loading
    LoadingData.goLoading()

    // call firebase function from api.js
    api.postDetail(slug).then((snapshot) => {
      const getKey = Object.keys(snapshot.val())[0]
      const data = snapshot.val()[getKey]

      this.title = data.title
      this.date = data.date
      this.content = data.content
      this.featured = data.image
    }).then(() => {
      LoadingData.doneLoading()
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default new PostData
