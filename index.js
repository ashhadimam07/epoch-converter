const chalk = require('chalk');
const readLineSync= require('readline-sync');

function epochToDate(epoch_time)
{
  const date = new Date(epoch_time * 1000);
  return date.toLocaleString();
}

function dateToEpoch(year,month,date,hours,minutes,seconds)
{
  const new_date = new Date(year, month, date, hours, minutes, seconds);
  const epoch = new_date.getTime()/1000.0;
  return epoch;
}

function epochDateConverter()
{
  console.log(chalk.yellowBright.bold("------EPOCH DATE CONVERTER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] EPOCH TO HUMAN DATE \n\n[2] HUMAN DATE TO EPOCH\n\n\[3] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));

  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----EPOCH TO HUMAN DATE CONVERTER----\n\n"));
        const epoch_time = readLineSync.question(chalk.yellowBright.bold("Enter the epoch time?\n"));
        const date = epochToDate(epoch_time);
        console.log(chalk.red("The human date is: ",date +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----HUMAN DATE TO EPOCH CONVERTER----\n\n"));
        const year = readLineSync.question(chalk.yellowBright.bold("Enter the year ?\n"));
        const month = readLineSync.question(chalk.yellowBright.bold("Enter the month ?\n"));
        const new_date = readLineSync.question(chalk.yellowBright.bold("Enter the date ?\n"));
        const hours = readLineSync.question(chalk.yellowBright.bold("Enter the hours ?\n"));
        const minutes = readLineSync.question(chalk.yellowBright.bold("Enter the minutes ?\n"));
        const seconds = readLineSync.question(chalk.yellowBright.bold("Enter the seconds ?\n"));
        const epoch = dateToEpoch(year,month,new_date,hours,minutes,seconds);
        console.log(chalk.red("The epoch is: ",epoch+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
  
}

epochDateConverter();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));