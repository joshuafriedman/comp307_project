import axios from 'axios'

const url = 'http://localhost:8004/api/mongo'

class PostService
{
  static getPosts()
  {
    return new Promise( (resolve, reject) =>{
      
        axios.get(url).then((res)=>{
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
      axios.get(url,{params:{username,password}}).then((res)=>{
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
}


export default PostService