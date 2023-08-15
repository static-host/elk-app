# 镜像来源
FROM node:alpine

# 设置工作目录
WORKDIR /elk

# 激活 CorePack
RUN corepack enable

# 设置模式
ENV NODE_ENV=production

# 指定端口
EXPOSE 12345/tcp

# 设置端口
ENV PORT=12345

# 将应用程序源代码复制到容器中
COPY . .

# 配置存储
ENV NUXT_STORAGE_FS_BASE='/elk/data'

# 设置存储
VOLUME [ "/elk/data" ]

# 启动应用程序
CMD ["node", "server/index.mjs"]
