import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgSoft};

  .layout {
    display: flex;

    .profile {
      flex: 6;

      .images {
        width: 100%;
        height: 30rem;
        position: relative;
  
        .cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
  
        .profilePic {
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          object-fit: cover;
          position: absolute;
          left: 0;
          right: 64rem;
          margin: auto;
          top: 17.6rem;
          border-bottom: 2px solid ${({theme}) => theme.blue};
          -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
          -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
          box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
        }
      }

      .profileContainer {
        padding: 2.4rem 6.4rem;
      
        .uInfo {
          background-color: ${({theme}) => theme.bg};
          height: 180px;
          -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
          -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
          box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
          border-radius: 20px;
          color: ${({theme}) => theme.textColor};
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
            
          .left {
            flex: 1;
            display: flex;
            gap: 10px;
  
            a{
              color: ${({theme}) => theme.textColor}
            }
          }
  
          .center {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
  
            span {
              font-size: 30px;
              font-weight: 500;
            }
  
            .info {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
  
              .item {
                display: flex;
                align-items: center;
                gap: 5px;
                color: themed("textColorSoft");
  
                span {
                  font-size: 12px;
                }
              }
            }
            button {
              border: none;
              background-color: #5271ff;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
            }
          }
  
          .right {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
          }

    }

      }
    }
  }
`