import React from 'react'

class Frannie extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        accountName: 'YINGHUA',
        accountpsw: 'yh3112',
        accountNumber: 3112,
        array: [1,2,3,4]
        } 
    }
    

    componentDidMount () {
        setTimeout(()=>{
            this.setState({
                accountpsw: 'cccc'
            })
        },3000)   
    }


    testA = (a) => {
       
            return `This is a test Function ${a}`;
       
    }

    testABC = (a,b,c) => {
        return `There is an ${a} and a ${b} and a ${c}!!!`;
    }

    testRequest = () =>{
        return `新建1个 无状态组件  把有状态组件里面state 值 传给无状态组件'<br/>'
        新建1个 有状态组件'`;
    }

    render(){
    return(
       <div>
           <h3>
               {this.testA('!!!!!!!!!')}
           </h3>
          <div>
            <p>
                {this.testABC('A','B','C')} 
            </p>
            <p>
                {this.testRequest()}
            </p>
         </div> 
         <div>
             {this.state.accountName}
             <div>
             {this.state.accountpsw}
             <br></br>
             {this.props.data}
             </div>
         </div>
       </div>
    )
    }
    
   

}
export default Frannie 