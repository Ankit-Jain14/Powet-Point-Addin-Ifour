import React ,{useState,useEffect}from 'react'
import {appapi} from './Api'

export default function ImaageUpload() {
    const[users,setUsers]=useState([])
// const getResponse=appapi.getPhoto();
const getPhotos = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);    
  };

  
useEffect(() => {
    getPhotos();
  }, []);

  var imagebase64 = "";

  const btnClick=()=>{
  

    const img = `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`
    

// testing for base64 url (inprogress)

    // const a=users.map((item)=>{if(item.id==1) {return item.avatar}})
    
    // console.log("image",a[0])

    // const canvas = document.createElement('canvas');
    // const ctx = canvas.getContext('2d');
    // canvas.width = a[0].width;
    // canvas.height = a[0].height;
    // ctx.drawImage(a[0], 150, 150);

    // var temp = canvas.toDataURL().split(',')[1];
    // var temp = canvas.toDataURL()

    Office.context.document.setSelectedDataAsync(img,{
        coercionType: Office.CoercionType.Image,
            imageLeft: 100,
            imageTop: 100
    },

    function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) 
        {
            console.log('asyncResult',asyncResult.error.message)
        }
    });
  }

  return (
   <>
    <div>Test</div>
    <div>
        
        <input type="radio" name="size" value="XS" id="xs" />Video
        <input type="radio" name="size" value="S" id="s"/> Photo
        <div >
      <h1>Hello ReqRes users!</h1>
      <div >
        {users.length &&
          users.map((user) => {
            return (
                <>              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
              <button onClick={()=>btnClick()}>Image click</button>
              </>     
              );
          })}
      </div>
    </div>
    </div>


  
   </>
  )
}


