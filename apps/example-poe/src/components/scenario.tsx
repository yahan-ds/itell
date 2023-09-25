import React from 'react';

interface ScenarioProps {
  children: React.ReactNode;
  variant?: "default" | "workedExample" | "remember";
  imgSrc?: string;
}

const Scenario: React.FC<ScenarioProps> = ({ children, variant = "default", imgSrc }) => {
  const defaultStyle: React.CSSProperties = {
    border: '2px solid #4682B4',
    borderRadius: '0px 15px 0px 15px ',
    backgroundColor: 'rgba(135, 206, 235, 0.1)',
    padding: '10px 20px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  };

  const workedExampleStyle: React.CSSProperties = {
    ...defaultStyle,
    border: '2px solid #097969',
    backgroundColor: 'white',
    position: 'relative'
  };

  const rememberStyle: React.CSSProperties = {
    ...workedExampleStyle,
    backgroundColor: 'rgba(156, 201, 195, 0.1)',
  };

  const titleStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#097969',
    color: 'white',
    padding: '0px 5px',
    fontSize: '0.8em',
    fontWeight: 'bold',
  };

  return (
    <div style={
      variant === "default" ? defaultStyle : 
      variant === "workedExample" ? workedExampleStyle : 
      variant === "remember" ? rememberStyle : defaultStyle
    }>
      {variant === "workedExample" && <div style={titleStyle}>WORKED EXAMPLE</div>}
      {variant === "remember" && <div style={titleStyle}>REMEMBER</div>}
      <div style={{ flex: 1 }}>   {/* Content container with flex: 1 */}
        {children}
      </div>
      {imgSrc && <img src={imgSrc} alt="Description" style={{ width: '30%', height: 'auto' }} />}
    </div>
  );
};

export default Scenario;
