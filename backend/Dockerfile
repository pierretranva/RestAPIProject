# Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
# Unauthorized copying of this file, via any medium is strictly prohibited.
# All rights reserved. No warranty, explicit or implicit, provided.
# Proprietary and confidential.

FROM python:3.10 AS base
WORKDIR /opt/app
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100
RUN pip install poetry

FROM base AS runner
COPY pyproject.toml poetry.lock poetry.toml ./
RUN poetry install
COPY . .
CMD ["poetry", "run", "uvicorn", "greenapple.main:app", "--host=0.0.0.0", "--port=8000", "--forwarded-allow-ips=*"]
