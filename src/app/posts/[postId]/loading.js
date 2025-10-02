export default function LoadingPostDetails() {
  return (
    <div
      style={
        {
          // width: "70%",
          // background: "white",
          // padding: "20px",
          // borderRadius: "10px",
          // color: "black",
          // margin: "20px auto",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }
      }
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #0070f3",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
