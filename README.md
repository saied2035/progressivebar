#  progressivebar

> Progress circular/rectangular bars to calculate statistics or loading screens. 
 
## Built with

  - JavaScript
  - ReactJS

## Prerequisites

  - npm cli
  - ReactJS project

## Getting Started

In your terminal run `npm install progressivebar`

## Usage

 **Currently there are two types of progress bars:**

 - Circle:
      ```JavaScript
        import { Circle } from 'progressivebar';
      ```
      - Attributes:
           - radius: It's number. The radius of the circle in pixels.
           - bar: It's number. It represents the precentage of the progress.
           - barWidth: It's number. It represents the width of the circular bar.
           - barColor: It's string. It represents the bar color, when the progress is zero.
           - textColor: It's string. It represents the color of the text inside the bar.
           - animationDuration: It's number. It represents the duration of progress animation in seconds.
           - animationColor: It's string. It represents the color of the progress on the bar.
           - size: This is the width of the element in pixels. It get typed like this `size='80px'` 

      - Default values of the attributes:
           ```JavaScript
          {
            radius: 30, 
            bar: 0,
            barWidth: 5,
            barColor: '#dcdbdc',
            textColor: '#307bbe',
            animationDuration: 1,
            animationColor: '#307bbe',
            size: '80px'
          }
           ```

      - Example:
           ```JSX
           <Circle  
           radius={30} 
           bar={40}
           barWidth={3}
           barColor={'#dcdbdc'}
           textColor={'#307bbe'}
           animationDuration={1}
           animationColor={'#307bbe'}
           size={'80px'} />
           ```     
    
 - Rectangular:
      ```JavaScript
        import { Rect } from 'progressivebar'; 
      ``` 
      - Attributes:
           - bar: It's number. It represents the precentage of the progress.
           - animationDuration: It's number. It represents the duration of progress animation in seconds.
           - width: This is the width of the Rectangle in pixels. It get typed like this `width='170px'`
           - height: This is the height of the Rectangle in pixels. It get typed like this `height='20px'`
           - borderColor: It's string. It represents the border color.
           - barColor: It's string. It represents the bar color, when the progress is zero.
           - animationColor: It's string. It represents the color of the progress on the bar.
           - textColor: It's string. It represents the color of the text inside the bar.
           - borderRadius: This is the radius of the border. It get typed like this `borderRadius='5px'` 

      - Default values of the attributes:
           ```JavaScript
          {
            bar: 0,
            animationDuration: 1,
            width: '170px',
            height: '20px',
            borderColor: 'black',
            barColor: 'transparent',
            animationColor: '#307bbe',
            textColor: 'black',
            borderRadius: '0px'
          }
           ```

     - Example:
          ```JSX
          <Rect  
          bar={50}
          animationDuration={1}
          width={'170px'}
          height={'20px'}
          borderColor={'black'}
          barColor={'transparent'}
          animationColor={'#307bbe'}
          textColor={'black'}
          borderRadius={'0px'} />
          ```  
           
## Authors

👤 **Saied Gaffer**

- GitHub: [@Saied2035](https://github.com/saied2035)
- Twitter: [@SaiedGaffer](https://twitter.com/SaiedGaffer)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/saiedgaffer/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/saied2035/progressivebar/issues).

## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is [MIT](./MIT) licensed.
