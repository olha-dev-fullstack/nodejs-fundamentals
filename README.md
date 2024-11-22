# Node.js Fundamentals

In this repository there is an overview of core elements of Node.js, including its built-in modules, streams, threads, and networking features. Each folder in the project demonstrates specific concepts or use cases with example code which is helpful to understand key concepts of how Node.js works.

## Table of Contents

1. [Buffers](#buffers)
2. [Compression](#compression)
3. [Event Emitter](#event-emitter)
4. [File System](#file-system)
5. [HTTP](#http)
6. [Networking](#networking)
7. [Streams](#streams)
8. [Threads](#threads)

---

### Buffers

Explore Node.js `Buffer` objects, which allow handling binary data efficiently.

---

### Compression

Examples of file compression and decompression in Node.js using:

- **Zlib**: Standard Nodejs compression library.
- **Brotli**: A modern compression algorithm.
- **Files**: Example files for testing compression.

#### Notable Files

- `app.js`: Demonstrates compression with Brotli.
- `benchmark.js`: Benchmarks compression performance.

---

### Event Emitter

Learn about the `EventEmitter` class in Node.js for creating and handling custom events.

---

### File System

Understand how to interact with the file system in Node.js for reading, writing, and managing files.

---

### HTTP

Discover how to create and manage HTTP servers and clients using the Node.js `http` module.

- **espresso.js**: Class which replaces popular Node.js framework for writing servers and routers in this example. Written using ode.js `http` module.
- **simple-web**: An application where user can login and create posts. Works using `espresso.js`.

---

### Networking

Networking-related examples, including:

- **Chat App**: A simple real-time chat application.
- **Simple TCP**: Demonstrates TCP socket communication.
- **Uploader App**: Simple app for uploading files using Node.js.

---

### Streams

Learn how to use streams in Node.js for handling large data efficiently. Includes examples of:

- Custom streams: `Readable`, `Writable`, and `Duplex` streams.
- Practical use cases: Copying files, encrypting/decrypting data, and working with large files.

---

### Threads

Explore multithreading in Node.js using the `worker_threads` module. Examples include:

- **Crypto-Heavy**: Handling computationally intensive tasks.
- **Deadlocks**: Understanding and preventing thread deadlocks.
- **Heavy Server**: Using threads to offload server tasks.
- **Prime Generator**: Generating prime numbers in worker threads.
- **Race Condition**: Demonstrating and resolving race conditions.
- **Request Sender**: Using threads for high-performance network requests.
- **Shared Memory**: Illustrates inter-thread communication using shared memory.
- **Worker Pool**: Create and manage custom pool of worker threads.
- **Zlib Heavy**: Compressing data using `zlib` in worker threads.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nodejs-fundamentals.git
   ```
2. Navigate to the desired folder:
   ```bash
   cd nodejs-fundamentals/<folder-name>
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```
4. Run the example:
   ```bash
   node <file-name>.js
   ```

---

## Prerequisites

- **Node.js**: Install the latest LTS version from [Node.js](https://nodejs.org/).
- **npm**: Comes bundled with Node.js installation.
