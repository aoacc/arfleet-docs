# Use ArFleet-JS

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aoacc/arfleet-js.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd arfleet-js/backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
Go back to the project directory
  ```bash
   cd ..
   ```
### Running the Application

You can use `./arfleet` script to run the commands.

:::warning
On Windows, you would have to use `node arfleet client` instead of `./arfleet client` for instance.
:::

Run:

```bash
./arfleet client
```

### Store Data

When your client is running, you can use the `./arfleet client store <directory or file>` command to store your data.

:::warning
In the current version, the data is available publicly. Please be cautious about storing sensitive information.
:::
