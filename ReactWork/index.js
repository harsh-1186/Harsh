// const div=document.getElementById("parent");
// console.dir(div);
// const h2=document.createElement("h2");
// h2.innerText="welcome to React";
// console.log(h2);
// div.appendChild(h2);
// h2.style.color="Yellow";
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'red'}},"welcome to React Js");
// const li1=React.createElement("li",{},"orange");
// const li2=React.createElement("li",{},"pine");
// const li3=React.createElement("li",{},"mango");
// const li4=React.createElement("li",{},"Apple");
// const ul=React.createElement("ul",{style:{backgroundColor:"yellow"}},li1,li2,li3,li4);
// root.render(ul);
const h1=React.createElement("h1",{},"by React Element");
const h11=<h1>Creating H1 using jsx</h1>;
const li1=<li>orange</li>;
const li2=<li>apple</li>;
const li3=<li>mango</li>;
const li4=<li>guava</li>;
const ul=<ul>{li1}{li2}{li3}{li4}</ul>;
const mystyle={
backgroundColor:"red"
}
const container=(
    <div style={mystyle}>
        <div>Welcome to react</div>
        <div>{ul}</div>
        <div>{h11}</div>
    </div>
)
root.render(container);