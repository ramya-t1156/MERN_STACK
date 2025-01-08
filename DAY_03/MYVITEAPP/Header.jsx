// to create an functional componant
//can only able to dend as divisions one within a single wrapper
//so we can give like division inside another division
// <> </> - called fragements -> you can't use any class or id

const Header = ()=>{
    let data = "header value";
    var a = [1,2,3];
    return(
        <div>
            {a.map((i)=>{
                console.log(i)
            })}
        </div>
    )
}
// //export
// export default Header;

// Named export
export default Header;
