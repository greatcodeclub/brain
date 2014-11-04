var NetworkNetwork = require('./lib/neural').Network
var network = new NetworkNetwork()

// Layers
network.addLayer(5, 2) // Hidden layer: 5 neurons, 2 inputs each (# inputs = # inputs to process)
network.addLayer(4)    // Hidden layer: 4 neurons
network.addLayer(1)    // Output layer: 1 neuron, outputting the result

network.train([
  // Training examples
  // inputs   outputs
  [  [0, 0],  [0]  ],
  [  [0, 1],  [1]  ],
  [  [1, 0],  [1]  ],
  [  [1, 1],  [0]  ]
])

// Querying the network
var output = network.process([1, 0]) // => [1]
console.log(output, Math.round(output))

var output = network.process([0, 0]) // => [0]
console.log(output, Math.round(output))

var output = network.process([1, 1]) // => [0]
console.log(output, Math.round(output))
