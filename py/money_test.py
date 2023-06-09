import unittest
import functools
import operator


class Dollar:
    def __init__(self, amount):
        self.amount = amount

    def times(self, multiplier):
        return Dollar(self.amount * multiplier)


class Money:
    def __init__(self, amount, currency):
        self.amount = amount
        self.currency = currency

    def times(self, multiplier):
        return Money(self.amount * multiplier, self.currency)


class Portfolio:
    def __init__(self):
        self.moneys = []

    def add(self, *moneys):
         self.moneys.extend(moneys)

    def evaluate(self, currency):
         total = functools.reduce(operator.add, map(lambda m: m.amount, self.moneys), 0)
         return Money(total, currency)


class TestMoney(unittest.TestCase):
    def testMultiplication(self):
        fiver = Dollar(5)
        tenner = fiver.times(2)
        self.assertEqual(10, tenner.amount)

    def testMultiplicationInEuros(self):
        tenEuros = Money(10, "EUR")
        twentyEuros = tenEuros.times(2)
        self.assertEqual(20, twentyEuros.amount)
        self.assertEqual("EUR", twentyEuros.currency)

    def testAddition(self):
        fiveDollars = Money(5, 'USD')
        tenDollars = Money(10, 'USD')
        fifteenDollars = Money(15, 'USD')
        portfolio = Portfolio()
        portfolio.add(fiveDollars, tenDollars)
        print(fifteenDollars, portfolio.evaluate('USD'))
        self.assertEqual(fifteenDollars, portfolio.evaluate('USD'))

if __name__ == '__main__':
    unittest.main()