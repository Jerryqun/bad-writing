#!/bin/bash

for file in docs/nextjs/*.md; do
    # 提取第一个##标题作为title
    title=$(grep -m1 '^## ' "$file" | sed 's/^## //')
    
    # 添加Front Matter到临时文件
    echo "---" > temp.md
    echo "nav: Nextjs" >> temp.md  
    echo "toc: content" >> temp.md
    echo "title: $title" >> temp.md
    echo "---" >> temp.md
    echo "" >> temp.md
    
    # 追加原文件内容
    cat "$file" >> temp.md
    
    # 替换原文件
    mv temp.md "$file"
done
