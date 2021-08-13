import styled from "styled-components";

const DashboradWrappr = styled.div`
    display: flex;
   
    .sidebar{
        width: 0;
        transition: 0.3s;
        background: rgb(135,65,181);
        background: linear-gradient(90deg, black, gray);   
        height: 100vh;
        &.show{
            width: 270px;
            li{
                margin: 17px;
                p{
               padding: 7px;
               background-color: white;
               border-radius: 10px;
               font-weight: bold;
               font-size: 17px;
               box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.582);
           }
            }
          
        }
        a{
        text-decoration: none;
        color: black;
        width: 100%;
      
        
        
        &:hover{
            text-decoration: none;
            color: black;
        }
    }
    ul{
        list-style-type: none;
        li{
            
           
           p{
               padding: 0;
               background-color: white;
               border-radius: 10px;
               font-weight: bold;
               font-size: 17px;
               box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.582);
           }
        border-radius: 10px;
        }
    }

    }
    .rightSide{
        flex: 1;
        height: 100vh;
        header{
            padding: 10px;
            box-shadow: 0 2px 3px 0 black;
            position: sticky;
            top: 0;
            z-index:100;
            background-color: white;
            display: flex;
            justify-content: space-between;
            height: 10vh;
           
            img{
                width: 80px;
                height: auto;
            }
            ul{
                display: flex;
                list-style-type: none;
                padding-top: 10px;
                li{
                   padding: 0 10px;
                    a{
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
        
        .content{
            background: rgb(135,65,181);
            background: linear-gradient(90deg, black, gray);
            padding: 20px;
            overflow-y: scroll !important;
            height: 90vh;
        }
    }

    @media screen and (max-width:700px){
        .sidebar{
            display: none;
        }
    }

`;

export default DashboradWrappr;