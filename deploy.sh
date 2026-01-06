#!/bin/bash

# 网站部署脚本
# 使用方法: ./deploy.sh

echo "=========================================="
echo "   吉音动漫网站部署脚本"
echo "=========================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}错误: 未找到Node.js，请先安装Node.js${NC}"
    exit 1
fi

# 检查npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}错误: 未找到npm，请先安装npm${NC}"
    exit 1
fi

echo -e "${YELLOW}步骤1: 检查依赖...${NC}"
if [ ! -d "node_modules" ]; then
    echo "正在安装依赖..."
    npm install
else
    echo "依赖已存在，跳过安装"
fi

echo ""
echo -e "${YELLOW}步骤2: 构建生产版本...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}构建失败！请检查错误信息${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}构建成功！${NC}"
echo ""
echo -e "${YELLOW}构建文件位置: ./dist${NC}"
echo ""
echo "=========================================="
echo "下一步操作："
echo "1. 将 dist 文件夹中的所有文件上传到服务器"
echo "2. 配置Web服务器（Nginx或Apache）"
echo "3. 配置域名DNS解析"
echo ""
echo "详细步骤请查看: 部署指南.md"
echo "=========================================="

