class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This coat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string){
    console.log('Target:', target); 
    console.log('Key:', key); 
}


