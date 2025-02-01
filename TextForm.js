import React , { useState } from 'react';


export default function TextForm(props) {

const HandelUpclick = () => {
let NewText = text.toUpperCase();
setText(NewText)
props.showalert("change into Upper case"  , "success")

}
const changetolowercase = () => {
let text1 = text.toLocaleLowerCase();
setText(text1)
props.showalert("change into Lower case"  , "success")
}

const handle = (event) => {
setText(event.target.value);



}

const clear = () =>{
let clear = ''
setText(clear)
props.showalert("clear text"  , "success")
}
const copy = () =>{

navigator.clipboard.writeText(text);

props.showalert("Copy into cipboard"  , "success")
}
const spacing = () =>{
let newtext = text.split(/[ ]+/);
setText(newtext.join(" "))
props.showalert("Remove extra space"  , "success")
}
const [text, setText] = useState('')
return (
<div>
<div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
<div className="mb-3">

<h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}} > {props.heading }</h1>
<label form="mybox" className="form-label" ></label>
<textarea className="form-control" value={text} onChange={handle} id="mybox" style={{backgroundColor: props.mode === 'dark' ? '#39476c' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }}  rows="8"></textarea>
</div>
<button disabled={text.length==0} className="btn btn-primary mx-2" onClick={HandelUpclick}>Convert to uppper case</button>
<button disabled={text.length==0}    className="btn btn-primary mx-2" onClick={changetolowercase}>Convert to uppper case</button>
<button disabled={text.length==0} className="btn btn-primary mx-2" onClick={clear}>clear</button>
<button disabled={text.length==0}  className="btn btn-primary mx-2" onClick={copy}>copy Text</button>
<button disabled={text.length==0}  className="btn btn-primary mx-2" onClick={spacing}>Remove Extra space</button>



</div>
<div className="container p-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
<h3>{props.head}</h3>
<p p-4>{text.split(/\s+/).filter((e)=>{ return e.length!=0})  .length}character : {text.length}Length </p>
<p>{0.008 * text.split(' ').filter((element)=>{return  element.length!=0})  .length} Time to raed</p>
</div>
<div className="container p-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
<h3>peview</h3>
<p>{text}</p>
</div>
</div>
);
}
