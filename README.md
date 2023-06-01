TDD is a technique for designing and structuring code that encourages simplicity and increases one's confidence in code, even as its size increases.

		->> That simplicity - the art of maximizing the amount of work not done, is essential
		->> That obviousness and clarity are more virtuous than cleverness
		->> That writing uncluttered code is a key component of being successful
	
	Red-Green-Refactor: The building block of TDD
	
	Red:
		Write a failing test (including possible compilations failures). Run the test suite to verify the failing test.
	Green:
		Write just enough production code to make the test green. Run the test suite to verify this.
	Refactor:
		Remove any code smells. These mau be due to duplication, hardcoded values, or improper use of language 	idioms (e.g., using verbose loop instead of a built-in iterator). If any test breaks during refactoring, prioritize getting them back to green before exiting the phase. 
		
	Failing: Red test
		
		//JavaScript
		const assert = require("assert")                                                                   
		
		let fiver = new Dollar(5)                                  
		let tenner = fiver.times(2)                                  
		assert.strictEqual(tenner.amount, 10)

				
		//Python		
		import unittest            
                 
		class TestMoney(unittest.TestCase):       
			def testMultiplication(self):
    			fiver = Dollar(5)
    			tenner = fiver.times(2)
				self.assertEqual(10, tenner.amount)										
												
												
												
		//GO
		package main
		
		import ("testing")
		
		func TestMultiplication(t *testing.T) {
			fiver := Dollar{
				amount: 5
			}
			
			tenner := fiver.Times(2)
			if tenner.amount != 10 {
				t.Errorf("Expected 10, got: [%d]", tenner.amount)
			}
		}
																		
	Going Green: Green test
	
		// JavaScript
		...
	
		class Dollar {                                              
			constructor(amount) {
				this.amount = amount
			}
			
			times(multiplier) {
				return new Dollar(10)
			}
		}
		
		...
		
		
		//Python
		...
		
		class Dollar:
			def __init__(self, amount):
				self.amount = amount
				
			def times(self, multiplier):
				return Dollar(10)
				
		...
				
		//GO
		... 
		
		type Dollar struct {
			amount int
		}
		
		func (d dollar) Times(multiplier int) Dollar {
			return Dollar{10}
		}
		
		
		...


	Cleaning up: Refactor
	
		//JavaScript
		...
		times(multiplier) {
			return new Dollar(this.amount * multiplier)
		...
		
		
		//Python
		...
		def times(multiplier) {
			return Dollar(self.amount * multiplier)
		}
		...
	
		
		//Go 
		...
		func (d dollar) Times(multiplier int) Dollar {
			return Dollar{d.amount * multiplier}
		}
		...