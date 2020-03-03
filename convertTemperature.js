let Temperature=function (celsius)
{
  this.celsius=celsius;

  this.getCelsius=function ()
  {
    return this.celsius;
  };
  this.setCelsius=function (celsius)
  {
    this.celsius=celsius;
  };

  this.getCelsiusToFahrenheit=function ()
  {
      return this.celsius*1.8+32;
  };
  this.getCelsiusToKelvin=function ()
  {
    return this.celsius+273;
  }
};

  let input=new Temperature(30);
  let cToF=input.getCelsiusToFahrenheit();
  console.log(cToF);
  let cToK=input.getCelsiusToKelvin();
  console.log(cToK);