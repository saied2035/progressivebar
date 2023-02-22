import React from 'react'
const validations = (props) => {
  const { radius, bar, barWidth, barColor, textColor, animationDuration, animationColor, size } = props;
  if(/[0-9]/.test(radius) === false) return 'radius attribute should be a number. The radius number represtents the radius of the circle in pixels.'
  else if(/[0-9]/.test(bar) === false && (bar === '') === false ) return 'bar attribute should be a number.'
  else if (bar > 100 || bar < 0) return 'Progress bars only accept a number  >= 0 and <= 100 for the bar attribute.'
  else if(/[0-9]/.test(barWidth) === false) return 'barWidth attribute should be a number. The barWidth number represents the width of the progress circle in pixels.'
  else if ((typeof barColor === 'string') === false) return 'barColor should be string in this format: "(color)"'
  else if ((typeof textColor === 'string') === false) return 'textColor should be string in this format: "(color)"'
  else if (/[0-9]/.test(animationDuration) === false)  return 'animationDuration attribute should be a number (in seconds).'
  else if ((typeof animationColor === 'string') === false) return 'animationColor should be string in this format: "(color)"'
  else if ((/[0-9]px$/.test(size)) === false) return 'size attribute should be in pixels in this format: "(number)px"'
  else return true  
}
const countAnimation = (num, duration) => {
  const progressText = document.getElementById('circle-counter')
  let counter = parseInt(progressText.textContent, 10)
  const percent = Math.abs(counter - num) 
  const progressing = (num) => {
    const progressText = document.getElementById("circle-counter");
    if(counter < num) progressText.textContent = `${++counter}%`;
    if(counter > num) progressText.textContent = `${--counter}%`;
    if(counter===num) {
      clearInterval(counts);
    }
  }
  let counts = setInterval(() => progressing(num), (duration * 1000)/percent ); 
} 
const progressFunc = (offset, circumference, num, duration) => {
  offset = circumference - ((num / 100) * circumference);
  document.getElementById('circle-progress-bar').setAttribute('stroke-dashoffset', offset)
  countAnimation(num, duration)
}

const Circle = (props) => {
  const result = validations(props)
  const { radius, bar, barWidth, barColor, textColor, animationDuration, animationColor, size } = props;
  const circumference = radius * 2 * Math.PI;
  let offset = circumference;
  const progress = {
    transition: `${animationDuration}s stroke-dashoffset`,
  };
  const progressBarContainer = {
    transform: 'rotateY(180deg) rotateZ(-90deg)'
  }
  React.useEffect(() => {
    if(typeof result === 'string') return console.error(result)
    let timer
    clearTimeout(timer)
    timer = setTimeout(() =>  {
      progressFunc(offset, circumference, bar, animationDuration)
    }, 500)
  },[bar, offset, circumference, animationDuration, result])
  return (
    <div style={{ width: `${size}` }}>
      <svg
        style={progressBarContainer}
        viewBox={`0 0 ${radius * 2 + 10} ${radius * 2 + 10}`}
      >
        <circle
          style={{ stroke: `${barColor}` }}
          strokeWidth={`${barWidth}`}
          fill="transparent"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
        />
        <circle
          id='circle-progress-bar'
          style={progress}
          strokeWidth={`${barWidth}`}
          stroke={`${animationColor}`}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
        />
        <text x="50%" y="50%" textAnchor="middle" id="circle-counter" style={{ transform: 'rotateY(180deg) rotateZ(-90deg)', 
        transformOrigin: '74% 21%', fontSize:`${radius/2}px`, fontWeight: 'bold'}} fill={`${textColor}`}>0%</text>
      </svg>
      </div>
  );
}
Circle.defaultProps = {
  radius: 30, 
  bar: 0,
  barWidth: 5,
  barColor: '#dcdbdc',
  textColor: '#307bbe',
  animationDuration: 1,
  animationColor: '#307bbe',
  size: '80px'
}
export default Circle;