npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.

ERESOLVE问题npm@7很常见，因为 npm 7.x 对某些事情比 npm 6.x 更严格。通常，最简单的解决方案是将--legacy-peer-deps标志传递给 npm（例如，npm i --legacy-peer-deps），或者使用npm@6.