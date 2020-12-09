import axios from 'axios'


const url = 'http://localhost:8004/api/mongo'
// const auth_url = url+"/auth"

class PostService
{
  static getPosts()
  {
    return new Promise( (resolve, reject) =>{
      
        axios.get(url+"/auth").then((res)=>{
          const data = res.data
          resolve(
            data
          )
        }).catch((err)=>{
        window.console.log('uh oh error at line 18 postSErvices.js');
        window.console.log(err);
        reject(err);
        })
    })
  }
  static authenticate(username,password){
    window.console.log('calling authenticate');
    return new Promise( (resolve,reject)=>{
      axios.get(url+"/auth",{params:{username,password}}).then((res)=>{
        const data = res.data
        var match = data=='match'? true:false
        resolve(match)
      }).catch((err)=>{
        window.console.log('error on authenticate');
        window.console.log(err);
        reject(err)
      })
    })
  }

static getHome(){
  return new Promise( (resolve, reject) =>{
      
    axios.get(url+"/home").then((res)=>{
      const data = res.data
      resolve(data)
    }).catch((err)=>{
    window.console.log('uh oh error at getHome');
    window.console.log(err);
    reject(err);
    })
})
}

static getNews(){
  return new Promise( (resolve, reject) =>{
      
    axios.get(url+"/news").then((res)=>{
      const data = res.data
      resolve(data)
    }).catch((err)=>{
    window.console.log('uh oh error at getNews');
    window.console.log(err);
    reject(err);
    })
})
}

static getEvents(){
  return new Promise( (resolve, reject) =>{
      
    axios.get(url+"/events").then((res)=>{
      const data = res.data
      resolve(data)
    }).catch((err)=>{
    window.console.log('uh oh error at getEvents');
    window.console.log(err);
    reject(err);
    })
})
}

static insertNews(datum,username,password){
  return axios.post(url+"/news",{params:{username,password},body:{datum}})
}

static insertEvents(datum,username,password){
  return axios.post(url+"/events",{params:{username,password},body:{datum}})
}

static insertpeople(datum,username,password){
  return axios.post(url+"/people",{params:{username,password},body:{datum}})
}

static insertClasses(datum,username,password){
  return axios.post(url+"/classes",{params:{username,password},body:{datum}})
}


}


export default PostService